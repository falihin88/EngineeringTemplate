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
    name: 'Structural Engineering',
    description:
      "",
    imageSrc: 'https://images.unsplash.com/photo-1618385455730-2571c38966b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY0NTY5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    imageAlt: '',
  },
  {
    name: 'Civil Engineering',
    description:
      "",
    imageSrc: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Mining Engineering',
    description:
      '',
    imageSrc: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjEyMTUyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
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