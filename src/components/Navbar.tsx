import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b text-lg h-16 w-screen bg-white">
      <div className="flex justify-between px-6 md:px-20">
        {/* Logo */}
        <div className="pt-4 cursor-pointer z-50">Logo</div>

        {/* Desktop Menu */}
        <div className="pt-4 md:flex gap-x-6 hidden">
          <Button intent="primary" size="small" className="font-semibold">
            Home
          </Button>
          <Button intent="primary" size="small" className="font-semibold">
            Services
          </Button>
          <Button intent="primary" size="small" className="font-semibold">
            Contacts
          </Button>
          <Button intent="primary" size="small" className="font-semibold">
            Log In
          </Button>
          <Button intent="primary" size="small" className="font-semibold">
            Sign Up
          </Button>
        </div>

        <div
          onClick={() => {
            setOpen((x) => !x);
          }}
          className="pt-5 md:hidden cursor-pointer z-50 relative"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between pt-20"
          >
            <div className="px-1">
              <Button intent="primary" size="mobile">
                Home
              </Button>
              <Button intent="primary" size="mobile">
                Services
              </Button>
              <Button intent="primary" size="mobile">
                Contacts
              </Button>
              <Button intent="primary" size="mobile">
                Log In
              </Button>
              <Button intent="primary" size="mobile">
                Sign Up
              </Button>
            </div>

            <div className="text-xs text-center pb-6">
              © 2025 | All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
