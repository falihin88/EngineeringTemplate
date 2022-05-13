<template lang="">
    <div>
        <Navigation/>
        <main>
      <!-- Side-by-side grid -->
      <div class="bg-white">
        <div class="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="divide-y divide-warm-gray-200">
            <section class="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
              <h2 id="contact-heading" class="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">Get in touch</h2>
              <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div v-for="item in contactDetails" :key="item.name">
                  <h3 class="text-lg font-medium text-warm-gray-900">
                    {{ item.name }}
                  </h3>
                  <dl class="mt-2 text-base text-warm-gray-500">
                    <div>
                      <dt class="sr-only">Email</dt>
                      <dd>
                        {{ item.email }}
                      </dd>
                    </div>
                    <div>
                      <dt class="sr-only">Email</dt>
                      <dd>
                        {{ item.address }}
                      </dd>
                    </div>
                    <div class="mt-1">
                      <dt class="sr-only">Phone number</dt>
                      <dd>
                        {{ item.telephone }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
            
          </div>
          <div class=" border-b-4 mt-10"></div>
        </div>
        
      </div>

      <!-- Image -->
        
      </main>
    </div>
</template>
<script>
import Navigation from '../components/navigation.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const contactDetails = [
  { name: 'Email', email: 'israengineersminers@gmail.com', },
  { name: 'Phone', telephone: '+61 (0)450 783 264' },
  { name: 'Address', address: '151 Burbong Street, Chapel Hill QLD 4069' },

 
]

const faqs = [
  {
    id: 1,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]
export default {
    components:{
        Navigation,
        Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    },
    setup() {
        return {
            
      contactDetails,
      
      faqs,
  
        }
    }
}
</script>
<style lang="">
    
</style>