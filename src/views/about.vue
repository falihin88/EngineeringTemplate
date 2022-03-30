<template >
    <div>
        <Navigation/>
        <div class="py-16 bg-gray-50 overflow-hidden" id="information">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{About.header1}}</p>
      </div>
      <div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">{{About.smallPara}}</p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none" v-for="para in About.multiPara" :key="para">
            <p class="mt-2 text-black text-base">{{para}}</p>
          </div>
          <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
           
               <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm text-blue-900 border-blue-900 border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :to="'/contactus'">contact us</router-link>
                  <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm bg-blue-900 text-white ml-2 p-4 border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-white" :to="'/ourwork'">Our Work</router-link>
            
            
              
           
          </div>
        </div>
        <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
             
              <div class="relative text-lg text-gray-700 font-medium mt-8">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">{{testimonial.description}}</p>
              </div>
            </div>
            <cite class="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              
              <span class="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <p class="text-white font-semibold sm:inline">{{testimonial.personName}}</p>
                {{ ' ' }}
                <p class="sm:inline">{{testimonial.personTitle}}</p>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import Navigation from '../components/navigation.vue'
// add more paragraph by adding more mpara[n] n is number.
const About = {
  header1: "What makes us different",
  smallPara: " Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque",
  multiPara: {
    mpara: "Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.",
    mpara2: "Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi."

  }
}

const testimonial = {
  personName: "Mr Beshir",
  personTile: "CEO of Beshir Institute",
  description: " I am pleased to have this testimonial."
}

export default {
    components:{
        Navigation
    },
    setup() {
      return {
        About,
        testimonial
      }
    }
}
</script>
<style >
    
</style>