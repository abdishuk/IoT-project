import mongoose from "mongoose";
const DescriptorSchema = mongoose.Schema({
  m2mcnt: {
    rn: {
      required: true,
      type: String,
    },
    ty: {
      required: true,
      type: String,
    },
    ri: {
      required: true,
      type: String,
    },
    pi: {
      required: true,
      type: String,
    },
    ct: {
      required: true,
      type: String,
    },
    lt: {
      required: true,
      type: String,
    },
    acpi: [
      {
        type: String,
        required: true,
      },
    ],

    et: {
      type: String,
      required: true,
    },
    st: {
      type: String,
      required: true,
    },
    mni: {
      type: String,
      required: true,
    },
    mbs: {
      type: String,
      required: true,
    },
    mia: {
      type: String,
      required: true,
    },
    cni: {
      type: String,
      required: true,
    },
    mni: {
      type: String,
      required: true,
    },
    cbs: [
      {
        type: String,
        required: true,
      },
    ],

    ch: [
      {
        nm: {
          type: String,
          required: true,
        },
        typ: {
          type: String,
          required: true,
        },
        val: {
          type: String,
          required: true,
        },
      },
    ],

    ol: {
      type: String,
      required: true,
    },
    la: {
      type: String,
      required: true,
    },
  },
});

const Descriptor = mongoose.model("Descriptor", DescriptorSchema);
export default Descriptor;
