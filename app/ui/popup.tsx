import React, { useState, useEffect } from 'react';

// List of 30 male and 30 female random names from European, American, and Arabian origins
const maleNames = [
  'John', 'James', 'Michael', 'William', 'David', 'Joseph', 'Robert', 'Charles', 'Thomas', 'Daniel',
  'Samuel', 'Matthew', 'Edward', 'George', 'Benjamin', 'Alexander', 'Oliver', 'Henry', 'Jack', 'Noah',
  'Liam', 'Ethan', 'Mohamed', 'Ahmed', 'Ali', 'Hassan', 'Omar', 'Tariq', 'Youssef', 'Zayd'
];

const femaleNames = [
  'Mary', 'Jennifer', 'Linda', 'Susan', 'Jessica', 'Sarah', 'Patricia', 'Elizabeth', 'Dorothy', 'Helen',
  'Karen', 'Nancy', 'Betty', 'Margaret', 'Emily', 'Olivia', 'Sophia', 'Isabella', 'Mia', 'Emma',
  'Aisha', 'Fatima', 'Layla', 'Samira', 'Yasmin', 'Nour', 'Reem', 'Rania', 'Huda', 'Zainab'
];

// Function to generate a random number between min and max
const getRandomAmount = (min: number, max: number): string => {
  return (Math.random() * (max - min) + min).toFixed(2); // toFixed(2) formats the number to 2 decimal places
};

// Function to generate a random duration between 6 seconds and 120 seconds (2 minutes)
const getRandomDuration = (): number => Math.floor(Math.random() * (120 - 6 + 1) + 6); // Random duration between 6 and 120 seconds

const RandomTransactionStrip = () => {
  const [isOpen, setIsOpen] = useState(false); // Start with no popup shown
  const [randomName, setRandomName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionAction, setTransactionAction] = useState('');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const createNewPopup = () => {
      // Close the existing popup if it's open
      setIsOpen(false);

      // Generate random data for the new popup
      const name = Math.random() > 0.5
        ? maleNames[Math.floor(Math.random() * maleNames.length)]
        : femaleNames[Math.floor(Math.random() * femaleNames.length)];
      const amount = getRandomAmount(500, 20000);
      const action = Math.random() > 0.5 ? 'Deposited' : 'Withdrew'; // Randomly choose between 'Deposited' and 'Withdrew'
      const randomDuration = getRandomDuration(); // Random duration between 6 and 120 seconds

      // Set the new data
      setRandomName(name);
      setTransactionAmount(amount);
      setTransactionAction(action);
      setDuration(randomDuration);

      // Show the popup
      setIsOpen(true);

      // Close the popup after the random duration or 10 seconds (whichever is shorter)
      const timeoutId = setTimeout(() => {
        setIsOpen(false); // Close the popup after 10 seconds
      }, Math.min(randomDuration * 1000, 10000)); // Convert to milliseconds, set a max of 10 seconds

      // Cleanup timeout on component unmount or when a new popup is triggered
      return () => clearTimeout(timeoutId);
    };

    const triggerPopup = () => {
      createNewPopup();

      // Generate a random interval between 2 and 30 seconds for the next popup
      const nextPopupTime = Math.random() * (30 - 2) + 2; // Random time between 2 and 30 seconds

      // Set a timeout to trigger the next popup after the calculated time
      const nextPopupTimeoutId = setTimeout(triggerPopup, nextPopupTime * 1000); // Convert to milliseconds

      // Cleanup next popup timeout on unmount or when creating a new popup
      return () => clearTimeout(nextPopupTimeoutId);
    };

    // Start the popup interval on mount
    const popupTimeoutId = setTimeout(triggerPopup, 0); // Start immediately

    // Cleanup interval when component unmounts
    return () => clearTimeout(popupTimeoutId);
  }, []);

  return (
    isOpen && (
      <div className="fixed bottom-4 right-4 bg-white text-black p-6 shadow-2xl rounded-xl z-50 w-full max-w-[300px] transform transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center w-full">
          <div className="text-center">
            <p className="text-xl font-semibold text-indigo-600">{randomName} {transactionAction}: <span className="font-bold text-green-600">${transactionAmount}</span></p>
            <p className="text-sm text-gray-500 mt-1">{duration}s ago</p>
          </div>
        </div>
      </div>
    )
  );
};

export default RandomTransactionStrip;
