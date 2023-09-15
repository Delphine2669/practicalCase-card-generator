import { useState } from "react";
import "./Form.css";
import ygritte from "../assets/ygritte.png";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [team, setTeam] = useState("");
  const [checked, setChecked] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);
  const [formData, setFormData] = useState();
  const [isFormVisible, setIsFormVisible] = useState("true");
  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      if (checkboxes.length < 3) {
        setCheckboxes([...checkboxes, value]);
      } else {
        alert("You can only select up to 3 checkboxes.");
      }
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };
  const handleTeamChange = (selectedTeam) => {
    const previewAvatar = document.querySelector(".preview-avatar");

    if (selectedTeam === "FullStack") {
      previewAvatar.style.borderColor = "blue";
    } else if (selectedTeam === "Designer") {
      previewAvatar.style.borderColor = "red";
    } else if (selectedTeam === "No Code") {
      previewAvatar.style.borderColor = "green";
    } else {
      previewAvatar.style.borderColor = "grey";
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".form-container").classList.add("form-hidden");
  };

  return (
    <div className="case-container">
      <div className={`form-container ${isFormVisible ? "" : "form-hidden"}`}>
        <form className="form-body" onSubmit={handleSubmit}>
          <div className="first-name-div">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              value={firstName}
              name="firstName"
              placeholder="firstName"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              className="first-name-input"
            />
          </div>
          <div className="team-div">
            <label htmlFor="team">Team: </label>
            <select
              type="select"
              name="team"
              id="team"
              onChange={(e) => {
                setTeam(e.target.value);
                handleTeamChange(e.target.value);
              }}
              value={team}
              className="team-select"
            >
              <option defaultValue="">Choose your team</option>
              <option value="FullStack">FullStack</option>
              <option value="Designer">Designer</option>
              <option value="No Code">No Code</option>
            </select>
          </div>
          <div className="avatar-div">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="uploadAvatar"
              accept="image/*"
            />
          </div>
          <legend className="legend">
            Pick your 3 favorites tools or languages
          </legend>
          <div className="checkboxes-container">
            <div className="dev-checkboxes">
              <label htmlFor="VSCode">
                <input
                  type="checkbox"
                  id="VSCode"
                  name="FullStack"
                  value="VSCode"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                VSCode
              </label>
              <label htmlFor="JavaScript">
                <input
                  type="checkbox"
                  id="JavaScript"
                  name="FullStack"
                  value="JavaScript"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                JavaScript
              </label>
              <label htmlFor="Swift">
                <input
                  type="checkbox"
                  id="Swift"
                  name="FullStack"
                  value="Swift"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Swift
              </label>
            </div>
            <div className="designer-checkboxes">
              <label htmlFor="InDesign">
                <input
                  type="checkbox"
                  id="InDesign"
                  name="Designer"
                  value="InDesign"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                InDesign
              </label>
              <label htmlFor="Figma">
                <input
                  type="checkbox"
                  id="Figma"
                  name="Designer"
                  value="Figma"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Figma
              </label>
              <label htmlFor="Marvel">
                <input
                  type="checkbox"
                  id="Marvel"
                  name="Designer"
                  value="Marvel"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Marvel
              </label>
              <label htmlFor="Dribbble">
                <input
                  type="checkbox"
                  id="Dribbble"
                  name="Designer"
                  value="Dribbble"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Dribbble
              </label>
            </div>
            <div className="nocode-checkboxes">
              <label htmlFor="Wordpress">
                <input
                  type="checkbox"
                  id="Wordpress"
                  name="No Code"
                  value="Wordpress"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Wordpress
              </label>
              <label htmlFor="Airtable">
                <input
                  type="checkbox"
                  id="Airtable"
                  name="No Code"
                  value="Airtable"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Airtable
              </label>
              <label htmlFor="Paint">
                <input
                  type="checkbox"
                  id="Paint"
                  name="No Code"
                  value="Paint"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Paint
              </label>
              <label htmlFor="Hubspot CMS">
                <input
                  type="checkbox"
                  id="Hubspot CMS"
                  name="No Code"
                  value="Hubspot CMS"
                  onChange={(e) =>
                    handleCheckboxChange(e.target.value, e.target.checked)
                  }
                />
                Hubspot CMS
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Done
          </button>
        </form>
      </div>
      <div
        className={`preview-container ${
          isFormVisible ? "preview-visible" : ""
        }`}
      >
        <div className="preview-body">
          <h3>{firstName}</h3>
          <img className="preview-avatar" src={ygritte} alt="" />
          <div className="tools-div">
            <p>{checkboxes[0]}</p>
            <p>{checkboxes[1]}</p>
            <p>{checkboxes[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
