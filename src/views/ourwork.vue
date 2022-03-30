<template lang="">
    <div>
        <Navigation/>
    <div class="bg-white">
    <div class="max-w-7xl mx-auto py-24 sm:py-32 sm:px-2 lg:px-4">
      <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div class="space-y-16 pt-10 mt-10 border-t border-gray-200 sm:pt-16 sm:mt-16">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
            <div class="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
              <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
            </div>
            <div class="flex-auto lg:col-span-7 xl:col-span-8">
              <div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import Navigation from '../components/navigation.vue'


const features = [
  {
    name: 'Building Safety',
    description:
      'The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Building Renovations',
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Building Maintenance',
    description:
      'Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

const people = [
  {
    name: 'Dr. M Dean',
    role: 'Structural (Civil) Engineer & Novel Mining Solutions Researcher',
    titles: 'MIEAust CPEng (Civil, Structural) APEC Engineer IntPE(Aus) RPEQ',
    imageUrl:
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjI3ODg4MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  // More people...
]
export default {
    components: {
        Navigation
    },
    setup(){
        return{
            features,
            people
        }
    }
}
</script>
<style lang="">
    
</style>