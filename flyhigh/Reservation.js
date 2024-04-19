import React, { useState } from 'react';

const ReservationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [area, setArea] = useState('indoor');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Number of Guests:</label>
        <select
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Area:</label>
        <div>
          <input
            type="radio"
            id="smoking"
            value="smoking"
            checked={area === 'smoking'}
            onChange={() => setArea('smoking')}
          />
          <label htmlFor="smoking">Smoking</label>
        </div>
        <div>
          <input
            type="radio"
            id="noSmoking"
            value="noSmoking"
            checked={area === 'noSmoking'}
            onChange={() => setArea('noSmoking')}
          />
          <label htmlFor="noSmoking">No Smoking</label>
        </div>
        <div>
          <input
            type="radio"
            id="indoor"
            value="indoor"
            checked={area === 'indoor'}
            onChange={() => setArea('indoor')}
          />
          <label htmlFor="indoor">Indoor</label>
        </div>
        <div>
          <input
            type="radio"
            id="outdoor"
            value="outdoor"
            checked={area === 'outdoor'}
            onChange={() => setArea('outdoor')}
          />
          <label htmlFor="outdoor">Outdoor</label>
        </div>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default ReservationForm;
