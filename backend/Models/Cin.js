import mongoose from "mongoose";
const CinSchema = mongoose.Schema({
  m2mcin: {
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
    st: {
      required: true,
      type: String,
    },
    cnf: {
      required: true,
      type: String,
    },
    cs: {
      required: true,
      type: String,
    },
    con: {
      required: true,
      type: String,
    },
  },
});

const Cin = mongoose.model("Cin", CinSchema);
export default Cin;
