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
          <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none" >
            <p class="mt-2 text-black text-base">Studies and Pre-feasibility Reports</p>
            <p class="mt-2 text-black text-base">Innovative Design & Documentation</p>
            <p class="mt-2 text-black text-base">Compliance Inspections, Controls & Certification</p>
          </div>
          <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
           
               <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm text-blue-900 border-blue-900 border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :to="'/contactus'">contact us</router-link>
                  <router-link class="inline-flex items-center px-6 py-3 mt-10 border-transparent text-base font-medium rounded-full shadow-sm bg-blue-900 text-white ml-2 p-4 border-2 uppercase hover:bg-white focus:outline-none hover:text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-white" :to="'/ourexpertise'">Our Expertise</router-link>
            
            
              
           
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
          <img class=" relative rounded-md shadow-lg" src="/src/assets/images/House5.jpg" alt="">
          
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
  smallPara: " Every project throws unique challenges and our Engineers need to dwell upon experience and expertise for an optimum solution.  ",
  
}

const testimonial = {
  personName: "",
  personTile: "",
  description: " "
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