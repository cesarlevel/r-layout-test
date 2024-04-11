<script setup>
import { RCheckbox, RInput, RSelect } from '@rebilly/revel';
import Title from '@/components/Title.vue';
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="r-container">
    <Title title="Forms" />
    <div class="r-grid">
      <div class="r-grid-item r-grid-item-secondary">
        <div class="tile is-description">
          <div class="tile-content">
            <h2 class="r-stack-5">My subtitle</h2>
            <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="r-grid-item r-grid-item-primary">
        <div class="tile">
          <div class="tile-content">
            <div class="r-grid-content">
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RInput label="First name" help-text="Some help text" />
              </div>
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RInput label="Last name" />
              </div>
              <div class="r-grid-item r-grid-item-full">
                <RInput left-label="https://" label="URL" />
              </div>
            </div>
          </div>
          <div class="tile-content is-secondary">
            <div class="r-grid-content">
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RSelect label="First name" help-text="Some help text" />
              </div>
            </div>
          </div>
          <div class="tile-content">
            <div class="r-grid-content">
              <div class="r-grid-item r-grid-item-full">
                <h3 class="r-stack-4">A subtitle</h3>
                <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RCheckbox label="First name" caption="Some help text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="r-grid">
      <div class="r-grid-item r-grid-item-secondary">
        <div class="tile is-description">
          <div class="tile-content">
            <h2 class="r-stack-5">My subtitle</h2>
            <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="r-grid-item r-grid-item-primary">
        <div class="tile">
          <div class="tile-content">
            <div class="r-grid-content">
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RInput label="First name" help-text="Some help text" />
              </div>
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RInput label="Last name" />
              </div>
              <div class="r-grid-item r-grid-item-full">
                <RInput left-label="https://" label="URL" />
              </div>
            </div>
          </div>
          <div class="tile-content is-secondary">
            <div class="r-grid-content">
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RSelect label="First name" help-text="Some help text" />
              </div>
            </div>
          </div>
          <div class="tile-content">
            <div class="r-grid-content">
              <div class="r-grid-item r-grid-item-full">
                <h3 class="r-stack-4">A subtitle</h3>
                <p class="r-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="r-grid-item r-grid-item-half r-grid-item-break-half">
                <RCheckbox label="First name" caption="Some help text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="r-grid-fitted r-justify-content-end">
      <div class="r-d-flex r-align-items-center">
        <RButton class="r-inline-3">Cancel</RButton>
        <RButton type="primary">Save</RButton>
      </div>
    </div>
    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Neque egestas congue quisque egestas. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui sapien eget mi proin sed libero enim sed faucibus. Enim eu turpis egestas pretium aenean pharetra magna ac. Auctor neque vitae tempus quam pellentesque nec nam. Sed ullamcorper morbi tincidunt ornare massa eget. Pretium nibh ipsum consequat nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. At imperdiet dui accumsan sit amet nulla facilisi. Urna nec tincidunt praesent semper feugiat nibh sed. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Felis bibendum ut tristique et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet aliquam id diam maecenas ultricies. Non arcu risus quis varius quam. At in tellus integer feugiat scelerisque varius morbi enim.</p> -->
  </div>
</template>

<style scoped>
</style>
