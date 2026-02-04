import React, { useState } from "react";

// styles
import useStyles from "./index.styles";

// MUI
import { Box, Button, TextField } from "@mui/material";

// Icons
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Toast
import { toast } from "react-toastify";

// EmailJS
import emailjs from "@emailjs/browser";

// media-query:
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../../config/config";

/* ------------------ */
/* EmailJS Config */
/* ------------------ */


const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // media Query:
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  /* ------------------ */
  /* Handlers */
  /* ------------------ */

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill all fields!", { position: "top-center" });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email:formData.email,
          subject: formData.subject,
          message: formData.message,
          
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀", { position: "top-center" });

      // reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      toast.error("Failed to send message. Try again!", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const _handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!", { position: "top-center" });
    } catch (err) {
      console.error("Copy failed", err);
      toast.error("Copy failed!", { position: "top-center" });
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:shivamsingh7280@gmail.com";

    setTimeout(() => {
      window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
    }, 500);
  };

  const handlePhoneClick = () => {
    window.open("tel:+919839612124");
  };

  return (
    <section id="contact" className={classes.contactWrapper}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.header}>
          <h2 className={classes.title}>Get In Touch</h2>
          <p
            className={classes.subtitle}
            style={{ width: isMobile || isTablet ? "75%" : "" }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

      

        <div
          className={classes.grid}
          style={{
            width: isMobile || isTablet ? "100%" : "",
            display: isMobile || isTablet ? "flex" : "",
            flexDirection: isMobile || isTablet ? "column" : "",
            alignItems: isMobile || isTablet ? "center" : "",
            justifyContent: isMobile || isTablet ? "center" : "",
          }}
        >
          {/* Form */}
          <div className={classes.card} style={{ width: isMobile || isTablet ? "90%" : "" }}>
            <form onSubmit={handleSubmit} className={classes.formContainer}>
              <div className={classes.formGroup}>
                <label>Name</label>
                <TextField
                  required
                  fullWidth
                  size="small"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={classes.formGroup}>
                <label>Email</label>
                <TextField
                  required
                  type="email"
                  fullWidth
                  size="small"
                  name="email"
                  value={formData.email}
                 onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={classes.formGroup}>
                <label>Subject</label>
                <TextField
                  required
                  fullWidth
                  size="small"
                  value={formData.subject}
                  name="subject"
                 onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={classes.formGroup}>
                <label>Message</label>
                <TextField
                  required
                  multiline
                  rows={4}
                  fullWidth
                  size="small"
                  className={classes.textarea}
                  value={formData.message}
                  name="message"
                 onChange={(e) => handleChange(e)}
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                className={classes.submitButton}
                fullWidth
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className={classes.infoCard} style={{ width: isMobile || isTablet ? "90%" : "" }}>
            <div className={classes.infoItem}>
              <div className={classes.iconBox}>
                <MailIcon />
              </div>

              <div
                className={classes.infoContent}
                onClick={handleEmailClick}
                style={{ cursor: "pointer" }}
              >
                <div className={classes.infoLabel}>Email</div>
                <div
                  className={classes.infoValue}
                  style={
                    isMobile
                      ? {
                          maxWidth: "180px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }
                      : {}
                  }
                >
                  shivamsingh7280@gmail.com
                </div>
              </div>

              <ContentCopyIcon
                className={classes.copyIcon}
                onClick={() => _handleCopy("shivamsingh7280@gmail.com")}
                titleAccess="Copy email"
              />
            </div>

            <div className={classes.infoItem}>
              <div className={classes.iconBox}>
                <PhoneIcon />
              </div>

              <div
                className={classes.infoContent}
                onClick={handlePhoneClick}
                style={{ cursor: "pointer" }}
              >
                <div className={classes.infoLabel}>Phone</div>
                <div className={classes.infoValue}>+91-9839612124</div>
              </div>

              <ContentCopyIcon
                className={classes.copyIcon}
                onClick={() => _handleCopy("+919839612124")}
                titleAccess="Copy phone"
              />
            </div>

            <div className={classes.infoItem}>
              <div className={classes.iconBox}>
                <LocationOnIcon />
              </div>
              <div>
                <div className={classes.infoLabel}>Location</div>
                <div className={classes.infoValue}>Delhi, India</div>
              </div>
            </div>

            <div className={classes.infoItem}>
              <div className={classes.iconBox}>
                <CellWifiIcon />
              </div>
              <div>
                <div className={classes.infoLabel}>Availability</div>
                <div className={classes.infoValue}>Open to opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
