<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start"
          >
            <CopyrightContentComponent />
            <div class="logos ml-sm-auto">
              <ul class="logos_list">
                <li>
                  <a href="#">
                    <img src="/images/logos_1.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/logos_2.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/logos_3.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/logos_4.png" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyrightContentComponent from './CopyrightContentComponent.vue'
export default {
  components: { CopyrightContentComponent }
}
</script>

<style lang=""></style>
