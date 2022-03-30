
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

     

      
    </div>
    
  </div>
  
</template>

<script>
import { AnnotationIcon,ExternalLinkIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, AcademicCapIcon } from '@heroicons/vue/outline'

const text = {
  header1:"YOUR SAFETY, OUR TOP PRIORITY",
  header2: "ISRA IS COMMITTED TO SAFETY",
  para: "Utilising solid engineering foundation coupled with latest technological innovation, we are confident that we can benefit you in many ways."
}
const transferFeatures = [
  {
    id: 1,
    name: 'Expert in the field',
    description:
      'Our consultant has proven track record to deliver your project in timely manner and our experts are verified',
    icon: AcademicCapIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'We value honesty as best as you do. So, rest assured we ......',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Instant Quote',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
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