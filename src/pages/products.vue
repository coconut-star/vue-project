<template>
<div>
  <page-header></page-header>

  <page-footer></page-footer>
</div>
</template>

<script>
import PageHeader from "@/components/header";
import PageFooter from '@/components/footer';
export default {
  name: "products",
  components: {
    PageHeader,
    PageFooter,
  }
};
</script>

