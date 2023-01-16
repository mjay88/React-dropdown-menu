import { Disclosure } from "@headlessui/react";
import { sideBarMenuItems } from "../sideBarMenuItems";
import SubAccordion from "./SubAccordion";

export default function AccordionCopy() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        {sideBarMenuItems.map((menuItem, index) => {
          return (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{menuItem.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  {menuItem.submenu ? (
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <SubAccordion submenus={menuItem.submenu}></SubAccordion>
                    </Disclosure.Panel>
                  ) : (
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <span>{menuItem.title}</span>
                    </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
