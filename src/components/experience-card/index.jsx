// styles
import useStyles from "./index.styles";

const ExperienceCard = ({ companyData }) => {
  const { companyName, designation, logo, timePeriod } = companyData;
  const classes = useStyles();

  return (
    <div className={classes.experienceCard}>
      <div className={classes.cardImg}>
        <img
          src={logo}
          alt={`${companyName}-logo`}
          className={classes.logoImg}
        />
      </div>

      <h3 className={classes.companyName}>{companyName}</h3>
      <h4 className={classes.designation}>{designation}</h4>
      <p className={classes.timePeriod}>{timePeriod}</p>
    </div>
  );
};

export default ExperienceCard;
