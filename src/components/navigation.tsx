'use client'

import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ModeToggle } from '@/components/darkmode-toggle'
import { Button } from '@/components/ui/button'
import { Menu, Instagram, Mail, Send, MapPin } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <div className="flex w-full items-start justify-center gap-1.5 bg-yellow-200 px-4 py-2 text-start font-inter text-sm text-black md:h-10 md:text-center md:text-base">
        🚀
        <p>
          Get a <strong>special discount</strong> by bringing your website
          project to us during our early launch!
        </p>
      </div>
      <div className="sticky top-0 z-50 w-full border-b border-neutral-100/30 bg-background/60 backdrop-blur-md dark:border-none">
        <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4 md:px-4">
          <Link href="/">
            <div className="flex items-center gap-4">
              {/* <Image
                src="/logo.svg"
                alt="Logo"
                width={34}
                height={34}
                className="h-[36px] w-[36px] rounded-full border"
              /> */}
              <span className="ps-2 font-passion-conflict text-lg font-medium md:text-xl">
                ShiroBIT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <Link href="/home" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/process" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Process
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 md:gap-3">
            <ModeToggle />
            {/* Mobile Navigation - Hidden on desktop */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="default"
                  size="icon"
                  className="rounded-xl bg-custom-light shadow-none md:p-4 md:text-lg"
                >
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col border-none bg-neutral-200 dark:bg-neutral-950"
              >
                <SheetHeader>
                  <SheetTitle className="text-start text-2xl">Menu</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <Link
                    href="/home"
                    onClick={() => setIsOpen(false)}
                    className="paragraph-hero"
                  >
                    Home
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="paragraph-hero"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="paragraph-hero"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/process"
                    onClick={() => setIsOpen(false)}
                    className="paragraph-hero"
                  >
                    Process
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="paragraph-hero"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto space-y-6 pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-neutral-300 dark:bg-neutral-800" />
                      <span className="font-passion-conflict text-xl">
                        ShiroBIT
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Custom High-Quality Website Development for your business
                      needs.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="text-muted-foreground h-4 w-4" />
                      <span>Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="text-muted-foreground h-4 w-4" />
                      <a
                        href="mailto:mumuhshidiq@gmail.com"
                        className="hover:underline"
                      >
                        mumuhshidiq@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href="https://instagram.com/shirobit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-neutral-300 p-2 transition-colors hover:bg-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://t.me/shirobit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-neutral-300 p-2 transition-colors hover:bg-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  )
}
