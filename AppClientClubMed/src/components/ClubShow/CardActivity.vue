<template>
  <div class="relative rounded-lg overflow-hidden shadow-md">
    <img
      class="w-full h-auto"
      src="https://via.placeholder.com/800x400"
      alt="Card image"
    />
    <div class="absolute bottom-0 left-0 w-full">
      <div
        class="bg-black bg-opacity-50 py-2 px-4 transition duration-500 transform hover:-translate-y-full"
      >
        <h2 class="text-white text-lg font-bold">Titre de la carte</h2>
      </div>
      <div
        class="hidden absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 justify-center items-center"
      >
        <h2 class="text-white text-lg font-bold">Nouveau titre</h2>
        <p class="text-white">Texte supplémentaire</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    name: 'ClubShow',
    mounted(){
        console.log('ClubShow mounted id : ' + this.$route.params.id);
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgSrc:{
            type: String,
            required: true
        }
        typeActivite: {
            type: String,
            required: true
        }
    }
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.bg-black').classList.toggle('hidden');
  });
});
</script>
