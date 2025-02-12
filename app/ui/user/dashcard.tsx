import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { MdDownloading, MdMonetizationOn, MdCurrencyBitcoin, MdCardGiftcard, MdAccountBalanceWallet, MdCoPresent, MdOutlineAutoMode, MdOutlineOutbox, MdContentCopy, MdClose } from "react-icons/md";
import TradingViewCharts from "../dashboard/customer/tradingviewchart";

export default function DashCard() {
  const [isAlertVisible, setAlertVisible] = useState(true); // State to control visibility of the alert

  const list = [
    {
      title: "Account Balance",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
      icon: <MdAccountBalanceWallet />
    },
    {
      title: "Bitcoin Balance",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      icon: <MdCurrencyBitcoin />
    },
    {
      title: "Total Profit",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      icon: <MdMonetizationOn />
    },
    {
      title: "Bonus",
      img: "/images/fruit-5.jpeg",
      price: "$50",
      icon: <MdCardGiftcard />
    },
    {
      title: "Referral Bonus",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
      icon: <MdOutlineAutoMode />
    },
    {
      title: "Total Withdrawal",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      icon: <MdOutlineOutbox />
    },
  ];

  // User's active plan data (if available)
  const userActivePlan = {
    name: "Premium Plan",
    cost: "$50.00",
    returns: "$75.00"
  };

  // Sample user transactions
  const transactions = [
    {
      date: "2024-12-15",
      type: "Deposit",
      amount: "$100.00",
      status: "Success"
    },
    {
      date: "2024-12-20",
      type: "Withdrawal",
      amount: "$50.00",
      status: "Pending"
    },
    {
      date: "2024-12-25",
      type: "Bonus",
      amount: "$10.00",
      status: "Success"
    }
  ];

  // Referral link (example)
  const referralLink = "https://www.example.com/referral/123456";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  const handleCloseAlert = () => {
    setAlertVisible(false); // Set the alert visibility to false when close button is clicked
  };

  return (
    <div className="gap-4 bg-white rounded-lg p-4">
      {/* New Trader Alert Section */}
      {isAlertVisible && (
        <div className="w-full bg-yellow-100 p-6 rounded-lg mb-6 flex justify-between items-center">
          <p className="text-sm sm:text-lg font-semibold text-center text-gray-800">
            New trader alert! 🚨 Welcome to OctaStrades! 🌍 Get ready for a seamless trading experience, packed with tools, resources, and a vibrant community. Your success story begins now!
          </p>
          <button onClick={handleCloseAlert} className="text-gray-600 hover:text-gray-800">
            <MdClose className="text-2xl" />
          </button>
        </div>
      )}

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {list.map((item, index) => (
          <Card key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-6">
              {/* Wrap the left and right columns in a flex row */}
              <div className="flex items-center justify-between w-full">
                {/* Left column: Title and Price */}
                <div className="flex flex-col w-2/4 text-center">
                  <p className="text-sm sm:text-base lg:text-lg font-semibold">{item.title}</p>
                  <p className="text-xs sm:text-sm lg:text-xl font-bold text-gray-800">{item.price}</p>
                </div>

                {/* Right column: Icon */}
                <div className="flex items-center justify-end w-1/4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">{item.icon}</div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold">Active Plan</h2>
      </div>

      {/* Active Plan Section */}
      <div className="w-full p-6 mt-5 bg-gray-100 rounded-lg border border-gray-300">
        {userActivePlan ? (
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{userActivePlan.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Cost: {userActivePlan.cost}</p>
            <p className="text-sm text-gray-600 mb-4">Returns: {userActivePlan.returns}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-4">You don't have an active plan.</p>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
              Add a Plan
            </button>
          </div>
        )}
      </div>

      <div className="mt-12">
        <TradingViewCharts />
      </div>

      {/* Divider for Transactions Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
      </div>

      <div className="w-full p-6 mt-5 bg-gray-100 rounded-lg border border-gray-300">
        <div className="hidden md:block">
          {transactions.length > 0 ? (
            <div className="space-y-4">
              {/* Transaction Table Header */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-200 font-semibold text-sm sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
                <div className="col-span-1">Date</div>
                <div className="col-span-1">Type</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1 text-right">Amount</div>
              </div>

              {/* Transaction Rows */}
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-sm sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4"
                >
                  <div className="col-span-1 text-sm text-gray-600">{transaction.date}</div>
                  <div className="col-span-1 text-sm text-gray-600">{transaction.type}</div>
                  <div className="col-span-1 text-sm font-semibold text-gray-800">{transaction.status}</div>
                  <div className="col-span-1 text-sm font-semibold text-gray-800 text-right">
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-4">No recent transactions found.</p>
            </div>
          )}
      </div>

  {/* Mobile View: Stack columns vertically */}
      <div className="block md:hidden">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-4 rounded-lg shadow-sm flex flex-col space-y-2 text-sm"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Date</span>
              <span className="text-gray-600">{transaction.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Type</span>
              <span className="text-gray-600">{transaction.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Status</span>
              <span className="text-gray-600">{transaction.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Amount</span>
              <span className="text-gray-600">{transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
      </div>



      {/* Referral Link Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold">Referral Link</h2>
      </div>

      <div className="w-full p-6 mt-5 bg-gray-100 rounded-lg border border-gray-300">
        <div className="flex flex-col items-center">
          <p className="text-sm sm:text-base text-center text-gray-600 mb-4">
            Share your referral link with others to earn rewards! Copy it and share it easily.
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm sm:text-base font-semibold text-gray-800 break-words mb-4 sm:mb-0 w-full sm:w-4/5">
              {referralLink}
            </div>
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-md flex items-center"
              onClick={handleCopyLink}
            >
              <MdContentCopy className="mr-2 text-lg" /> Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
