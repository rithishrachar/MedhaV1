import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';


const Register = () => {
  const [paymentSuccess, setPaymentSucces] = useState(false);
  console.log(paymentSuccess);
  const [events, setEvents] = useState({
    coding: false,
    webDesigning: false,
    quizz: false,
    gaming: false,
    productLaunch: false,
    itManager: false,
    reels: false
  });

  const [eventDetails, setEventDetails] = useState({
    coding: { participant1: '', participant2: '' },
    webDesigning: { participant1: '', participant2: '' },
    quizz: { participant1: '', participant2: '' },
    gaming: { participant1: '', participant2: '', participant3: '', participant4: '' },
    productLaunch: { participant1: '', participant2: '' },
    itManager: { participant1: '' }, // Only one participant for IT Manager
    reels: { participant1: '', participant2: '' },
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    collegeName: '',
    course: 'BCA',
    semester: '',
    transactionId: '',
  });

  const [errors, setErrors] = useState({});
  const [showPaymentImage, setShowPaymentImage] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEvents({ ...events, [name]: checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventDetailChange = (event, eventName) => {
    const { name, value } = event.target;
    setEventDetails({
      ...eventDetails,
      [eventName]: {
        ...eventDetails[eventName],
        [name]: value,
      },
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate basic form fields
    if (!formData.name) newErrors.name = 'Head Name is required';
    if (!formData.phone) newErrors.phone = 'Head Phone no is required';
    if (!formData.collegeName) newErrors.collegeName = 'College Name is required';
    if (!formData.semester) newErrors.semester = 'Semester is required';

    // Validate at least one event is selected
    if (!Object.values(events).some((event) => event)) {
      newErrors.events = 'At least one event must be selected';
    }

    // Validate participant details for selected events
    Object.keys(events).forEach((event) => {
      if (events[event]) {
        const participants = eventDetails[event];
        if (event === 'gaming') {
          // Gaming requires 4 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
          if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
          if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
        } else if (event === 'itManager') {
          // IT Manager requires only 1 participant
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
        } else {
          // Other events require 2 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //this is for the pay button
  const paymentHandler = async (e) => {

  
    //total amount calculation
    let totalParticipants = 0;
    Object.keys(eventDetails).forEach((event) => {
      totalParticipants += Object.values(eventDetails[event]).filter((p) => p.trim() !== '').length;
    });

    const calculatedAmount = totalParticipants * 10000; 
    setTotalAmount(calculatedAmount); 

    const amount = calculatedAmount;
    const currency = "INR";
    const receiptId = "receiptId1";

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    const registrationData = {
      name: formData.name,
      phone: formData.phone,
      collegeName: formData.collegeName,
      course: formData.course,
      semester: formData.semester,
      transactionId: formData.transactionId,
      events: Object.keys(events).filter(event => events[event]), 
      eventDetails: Object.fromEntries(
        Object.entries(eventDetails).filter(([event, participants]) => 
          Object.values(participants).some(participant => participant.trim() !== '')
        )
      ),
      totalAmount: calculatedAmount,
    };
    

    var options = {
      key: "rzp_test_y73boWxsFKNDJj", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Medha", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        if(jsonRes.msg === 'success') {
          setPaymentSucces(true);
          console.log('Payment Successful', registrationData);
        }
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();

  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }
  
    let totalParticipants = 0;
    Object.keys(eventDetails).forEach((event) => {
      totalParticipants += Object.values(eventDetails[event]).filter((p) => p.trim() !== '').length;
    });
  
    const calculatedAmount = totalParticipants * 100; 
    setTotalAmount(calculatedAmount); 
  
    const registrationData = {
      name: formData.name,
      phone: formData.phone,
      collegeName: formData.collegeName,
      course: formData.course,
      semester: formData.semester,
      transactionId: formData.transactionId,
      events: Object.keys(events).filter(event => events[event]), 
      eventDetails: eventDetails,
      totalAmount: calculatedAmount,
    };
  
    

    try {
      const response = await axios('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Registration Successful!');
        console.log('Server Response:', data);
  
        setFormData({
          name: '',
          phone: '',
          collegeName: '',
          course: 'BCA',
          semester: '',
          transactionId: '',
        });
  
        setEvents({
          coding: false,
          webDesigning: false,
          quizz: false,
          gaming: false,
          productLaunch: false,
          itManager: false,
          reels: false,
        });
  
        setEventDetails({
          coding: { participant1: '', participant2: '' },
          webDesigning: { participant1: '', participant2: '' },
          quizz: { participant1: '', participant2: '' },
          gaming: { participant1: '', participant2: '', participant3: '', participant4: '' },
          productLaunch: { participant1: '', participant2: '' },
          itManager: { participant1: '' },
          reels: { participant1: '', participant2: '' },
        });
  
        setTotalAmount(0); 
  
      } else {
        alert(`Registration failed: ${data.error}`);
        console.error('Error:', data);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Network Error:', error);
    }
  };
  
  const [totalAmount, setTotalAmount] = useState(0);
  if(paymentSuccess) {
    return (
      <div className="register-container">
        <div className="register-card">
          <h1 className="register-title">Registration</h1>
          <h2>Payment Successful!</h2>
          <button onClick={() => setPaymentSucces(!paymentSuccess)}>Register more</button>
        </div>
      </div>
    );
  }
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Registration</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Basic Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Head Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Head Phone no:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* More Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="collegeName">College Name:</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
              />
              {errors.collegeName && <span className="error">{errors.collegeName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select id="course" name="course" value={formData.course} onChange={handleInputChange}>
                <option>BCA</option>
                <option>MCA</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="semester">Semester:</label>
              <input
                type="text"
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
                required
              />
              {errors.semester && <span className="error">{errors.semester}</span>}
            </div>
          </div>

          {/* Events Section */}
          <h2>Events</h2>
          {errors.events && <span className="error">{errors.events}</span>}
          <div className="events-grid">
            {Object.keys(events).map((event) => (
              <div className="event-group" key={event}>
                <label>
                  <input
                    type="checkbox"
                    name={event}
                    checked={events[event]}
                    onChange={handleCheckboxChange}
                  />
                  {event.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </label>
                {events[event] && (
                  <div className="event-details">
                    {event === 'gaming' ? (
                      <>
                        <input
                          type="text"
                          placeholder="Participant 1"
                          name="participant1"
                          value={eventDetails[event].participant1}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant1`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant1`] && (
                          <span className="error">{errors[`${event}-participant1`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 2"
                          name="participant2"
                          value={eventDetails[event].participant2}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant2`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant2`] && (
                          <span className="error">{errors[`${event}-participant2`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 3"
                          name="participant3"
                          value={eventDetails[event].participant3}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant3`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant3`] && (
                          <span className="error">{errors[`${event}-participant3`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 4"
                          name="participant4"
                          value={eventDetails[event].participant4}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant4`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant4`] && (
                          <span className="error">{errors[`${event}-participant4`]}</span>
                        )}
                      </>
                    ) : event === 'itManager' ? (
                      <>
                        <input
                          type="text"
                          placeholder="Participant 1"
                          name="participant1"
                          value={eventDetails[event].participant1}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant1`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant1`] && (
                          <span className="error">{errors[`${event}-participant1`]}</span>
                        )}
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          placeholder="Participant 1"
                          name="participant1"
                          value={eventDetails[event].participant1}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant1`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant1`] && (
                          <span className="error">{errors[`${event}-participant1`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 2"
                          name="participant2"
                          value={eventDetails[event].participant2}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant2`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant2`] && (
                          <span className="error">{errors[`${event}-participant2`]}</span>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          

          {/* Total Amount */}
          <div className="total-amount">
            <strong>Total Amount: ₹{totalAmount/100}</strong>
          </div>

          {/* Pay Button */}
          <button type="button" className="pay-button" onClick={paymentHandler}>
            Pay & Submit
          </button>

          {/* Payment Image */}
          {showPaymentImage && (
            <div className="payment-image">
              <img src="/images/bgf.jpg" alt="Payment QR Code" />
            </div>
          )}

          {/* Query Section */}
          <div className="query-section">
            <p>If any query, call: 65879585</p>
          </div>

         
        </form>
      </div>
    </div>
  );
};

export default Register;