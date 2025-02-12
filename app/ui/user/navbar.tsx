import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { HiMenu, HiUserCircle } from "react-icons/hi"; // Importing hamburger icon from react-icons
import { MdAttachMoney } from "react-icons/md"; // Dollar icon
import { FaRegEdit, FaRegCreditCard, FaCheckCircle, FaCreditCard, FaHome, FaUser, FaLock, FaGift, FaSearch, FaList, FaChartBar } from "react-icons/fa"; // Example icons

export default function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  var user = "testing";
  var balance = "$500.00"; // Example user balance

  // Define the cards data with name, icon, and href link
  const cardData = [
    {
      name: "Home",
      icon: <FaRegEdit />,
      href: "/dashboard/user"
    },
    {
      name: "Deeposit",
      icon: <FaRegCreditCard />,
      href: "/dashboard/user/deposit"
    },
    {
      name: "Withdraw",
      icon: <FaCheckCircle />,
      href: "/dashboard/user/withdraw"
    },
    {
      name: "Transactions",
      icon: <FaHome />,
      href: "/home"
    },
    {
      name: "Profile",
      icon: <FaSearch />,
      href: "/search"
    },
  ];

  return (
    <>
      <div className="flex items-center justify-end space-x-4 mb-3">
        {/* Hamburger Icon */}
        <div
          onClick={onOpen} // Clicking on the icon opens the drawer
          aria-label="Open Drawer"
          className="p-2 cursor-pointer"
        >
          <HiMenu size={30} /> {/* Add the hamburger icon */}
        </div>
        {/* Person icon */}
        <HiUserCircle size={30} className="text-gray-700" />
        <p>{user}</p>
      </div>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={"left"}
        className="w-[65%]" // Tailwind class for 65% width
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
                {/* User Profile Card */}
                <div className="flex flex-col items-center space-y-4 p-4 border-b">
                  <HiUserCircle size={80} className="text-gray-700" /> {/* Larger icon */}
                  <div className="text-center">
                    <p className="font-semibold text-xl">{user}</p>
                  </div>

                  {/* User Balance Section with rounded edges and dollar icon */}
                  <div className="w-full flex justify-center items-center text-center">
                    <div className="flex items-center space-x-2 bg-green-100 p-3 rounded-lg">
                      <MdAttachMoney size={24} className="text-green-600" /> {/* Dollar Icon */}
                      <p className="text-xl font-bold text-green-600">{balance}</p>
                    </div>
                  </div>
                </div>

                {/* Div with cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {cardData.map((card, index) => (
                    <a
                      key={index}
                      href={card.href}
                      className="flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg cursor-pointer transition-all duration-300"
                    >
                      <div className="flex flex-col items-center">
                        <div className="text-2xl text-gray-700 mb-2">{card.icon}</div>
                        <p className="text-sm text-gray-700">{card.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
