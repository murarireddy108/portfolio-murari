import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "sriram-pothumani",
        "template_po4z5p9",
        e.target,
        "user_0ZyOrchgEZPoh31PXzsaH"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }

  const classes = useStyles();

  return (
    <div class="container card py-3 justify-content-center lead bg-secondary text-white">
      <div class="card-body text-white">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div class="col mb-3">
              <TextField
                required
                name="name"
                id="standard-required"
                label="Name"
                width="auto"
                style={{ minWidth: "300px", maxWidth: "500px" }}
              />
            </div>
            <div class="col mb-3">
              <TextField
                type="email"
                required
                name="user_email"
                id="standard-required"
                label="Email"
                width="auto"
                style={{ minWidth: "300px", maxWidth: "500px" }}
              />
            </div>
          </div>
          <div class="col mb-3">
            <TextField
              id="standard-multiline-flexible"
              label="Message"
              name="message"
              required
              multiline
              maxRows={4}
              width="auto"
              style={{ minWidth: "300px", maxWidth: "700px" }}
            />
          </div>
          <div class="col ">
            <Button
              type="submit"
              // class="btn btn-light"
              variant="contained"
              name="Send"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mailer;
