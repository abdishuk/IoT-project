import mongoose from "mongoose";
const LampSchema = mongoose.Schema({
  m2mae: {
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
    api: {
      type: String,
      required: true,
    },
    aei: {
      type: String,
      required: true,
    },
    poa: [
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

    rr: {
      type: Boolean,
      required: true,
    },
  },
});

const Lamp = mongoose.model("Lamp", LampSchema);
export default Lamp;
