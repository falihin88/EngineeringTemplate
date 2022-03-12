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

      <!-- FAQ -->
      <div class="bg-warm-gray-50">
        <div class="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 class="text-3xl font-extrabold text-warm-gray-900">Frequently asked questions</h2>
              <p class="mt-4 text-lg text-warm-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href="#" class="font-medium text-cyan-700 hover:text-cyan-600">customer support</a> team.</p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-12">
                <div v-for="faq in faqs" :key="faq.id">
                  <dt class="text-lg font-medium text-warm-gray-900">
                    {{ faq.question }}
                  </dt>
                  <dd class="mt-2 text-base text-warm-gray-500">
                    {{ faq.answer }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div></main>
    </div>
</template>
<script>
import Navigation from '../components/navigation.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const contactDetails = [
  { name: 'Collaborate', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Press', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Join our team', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Say hello', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
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