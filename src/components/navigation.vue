
<template>
  <div class=" shadow-2xl relative md:bg-gradient-to-r md:from-green-600 md:to-green-300 bg-gradient-to-b from-green-600 to-green-300 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
     
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 " aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span class="sr-only">ISRA</span>
                <h1 class="text-white rounded-lg font-extrabold text-3xl border-2 p-2">ISRA</h1>
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton class="bg-blue-900 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-white hover:text-gray-300">{{ item.name }}</a>
            </div>
          </div>
          
        </nav>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-green-500 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <h1 class="text-white rounded-lg font-extrabold text-3xl border-2 p-2">ISRA</h1>
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

  <div v-if="this.$route.name == 'Home'">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                
                <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-blue-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span class="md:block uppercase ">{{home.header.bigTitle1}}</span>
                  {{ ' ' }}
                  <span class="text-white md:block uppercase">{{home.header.bigTitle2}}</span>
                </h1>
                <p class="mt-3 text-base md:text-gray-100 text-gray-50sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-tight font-light">{{home.header.description}}</p>
                 <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm text-white border-white border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :to="'/about'">About Us</router-link>
                  <router-link  class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm bg-blue-900 text-white ml-2 p-4 border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-white" :to="'/ourwork'">Our Work</router-link>
               
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 ">
            <div class="p-2 max-w-5xl grid-cols-4 grid gap-3 xs:grid-cols-5 xs:p-8 md:grid-cols-4 lg:gap-5">
              <div class="md:col-span-2 col-span-2 "><img class="rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODI5OTc0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt=""></div>
             <div class="col-span-2 flex justify-between flex-col">
                <div class="col-span-2"><img class="rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1534004766562-728e5c705ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjU3MzExOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt=""></div>
              
              <div class="col-span-3"><img class="rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt=""></div>
             </div>
    
   
  </div>
             
            </div>
          </div>
        </div>
      </main>
  </div>

  <!-- About -->
  <div v-if="this.$route.name == 'About'">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
           <div class="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
        <p class="mt-6 text-xl text-cyan-100 max-w-3xl">{{home.about.description}}</p>
      <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm text-white border-white border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :to="'/about#information'">Read More</router-link>
      </div>
         
        </div>
      </main>
  </div>

  <!-- our work -->
  <div v-if="this.$route.name == 'ourwork'">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{{home.ourwork.header}}</h1>
        <p class="mt-6 text-xl text-cyan-100 max-w-3xl">{{home.ourwork.description}}</p>
      </div>
        </div>
      </main>
  </div>

  <!-- contact us -->
  <div v-if="this.$route.name == 'contactus'">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
           <div class="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{{home.contactus.header}}</h1>
        <p class="mt-6 text-xl text-cyan-100 max-w-3xl">{{home.contactus.description}}</p>
      
      </div>
         
        </div>
      </main>
  </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronRightIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: ' Our Work', href: '/ourwork' },
  { name: 'Contact us', href: '/contactus' },
]

const home = 
      {
        header: {
          bigTitle1: "Structural Engineering",
          bigTitle2: "Services",
          description: "ISRA provides engineering consultancy to our client in the area of building safety, security enforcement and building certification"
        },
        about: {
          description: "this this about description"
        },

        ourwork: {
          description:"Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.",
          header: "What We Specialised"
        },

        contactus:{
          description:"Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.",
          header:"Contact us"
        }
      }

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    MenuIcon,
    XIcon,
  },
  setup() {

    
    
    return {
      navigation,
      home
    }
  },
}
</script>