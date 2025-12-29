          <div
            className={`skills ${aboutOption === "skills" ? "optionOn" : ""}`}
            data-option="skills"
          >
            <div className="all-skills">
              <div className="soft-skills">
                <h3>
                  <span>Soft</span> skills
                </h3>
                <div className="soft-skills-wrapper">
                  {aboutInformation.skills.softSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {t(skill)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hard-skills">
                <h3>
                  <span>Hard</span> skills
                </h3>
                <div className="hard-skills-wrapper">
                  {aboutInformation.skills.hardSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {t(skill)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>