import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfInput from "../../atoms/SfInput/SfInput.vue";
import { toInt } from "@glidejs/glide/src/utils/unit";

export default {
  name: "SfCollectedProduct",
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: String,
      default: "assets/storybook/product_thumb.png"
    },
    /**
     * Product title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },
    /**
     * Selected quantity
     */
    qty: {
      type: String,
      default: "1"
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 1
    }
  },
  model: {
    prop: "qty"
  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    }
  },
  watch: {
    qty(value) {
      const qty = toInt(value);
      if (qty <= 0) {
        this.$emit("input", "1");
        return;
      }
      if (qty > this.stock) {
        this.$emit("input", "" + this.stock);
        return;
      }
    }
  },
  components: {
    SfIcon,
    SfImage,
    SfCircleIcon,
    SfPrice,
    SfInput
  }
};
