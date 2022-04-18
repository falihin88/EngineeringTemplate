
<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative">
        <h2 class="text-center uppercase text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl ">{{text.header1}}</h2>
        
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl uppercase">{{text.header2}}</h3>
          <p class="mt-3 text-lg text-gray-500">{{text.para}}</p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in transferFeatures" :key="item.id" class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <img class="relative mx-auto rounded-xl shadow-2xl md:h-auto h-96 w-80 md:w-auto sepia" width="490" src="https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0ODMwMzEy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="" />
        </div>
      </div>

     <div class="relative">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-green-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block text-indigo-700">Contact Us for a free first Consultation</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200"></p>
            <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm text-white border-white border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :to="'/contactus'">Contact Us</router-link>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://images.unsplash.com/photo-1469389335181-2198b4caa734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTQwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="App screenshot" />
        </div>
      </div>
    </div>
  </div>

      
    </div>
    
  </div>
  
</template>

<script>
import { AnnotationIcon,ExternalLinkIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, AcademicCapIcon } from '@heroicons/vue/outline'

const text = {
  header1:"",
  header2: "SAFETY & SUSTAINABILITY",
  para: "Utilising in-house capability and in collaboration with our long term associates in multi-national firms we will drive your programs"
}
const transferFeatures = [
  {
    id: 1,
    name: 'Expertise',
    description:
      'Our Engineers with proven track record will deliver via review, injecting technology and innovation.',
    icon: AcademicCapIcon,
  },
  {
    id: 2,
    name: 'Technology',
    description:
      'Latest evidence based technology that will surely wowed our clients',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Innovation',
    description:
      'Constanly innovating our solutions to give the best to our clients',
    icon: LightningBoltIcon,
  },
]

export default {
    components: {
        ExternalLinkIcon,
    },
  setup() {
    return {
      transferFeatures,
      text
    }
  },
}
</script>