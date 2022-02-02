import React from 'react'
import { blueGrey } from '@material-ui/core/colors'
import Tree from '@mui-treasury/components/chart/tree'
import Box from '@material-ui/core/Box'
import Class from '../Class/Class'

const Dot = () => <Box zIndex={1} height={250} width={350} />

const ClassTree = () => {
  return (
    <Tree length={24} gutter={16} outline={`1px solid ${blueGrey[100]}`}>
      <Tree.Trunk>
        <Box zIndex={1} height={190} width={350}>
          <Class
            Title='Me'
            PrivateProperties='- PersonalInformation perInfo|- Experience myExperience'
            PublicProperties='+ void contactMe(string text)'
          />
        </Box>
        <Tree.Branches>
          <Tree.Twig>
            <Tree.Stem>
              <Box zIndex={1} height={360} width={350}>
                <Class
                  Title='PersonalInformation'
                  PrivateProperties='- string firstName = "Navid"|- string lastName = "Mousavizadeh"|- int Age = 20|- Education myEducation|- List<Skill> mySkills|'
                  PublicProperties='+ void printAboutMe()|+ void printMySkills()|+ void printMyTimeLine()'
                />
              </Box>
            </Tree.Stem>
            <Tree.Branches>
              <Tree.Twig>
                <Tree.Stem>
                  <Box zIndex={1} height={200} width={350}>
                    <Class
                      Title='Education'
                      University={true}
                      PrivateProperties='- string major = "Computer Engineering"|- int admissionYear = 1398|- float grade = 18.24 (Top student)'
                      PublicProperties=''
                    />
                  </Box>
                </Tree.Stem>
              </Tree.Twig>
              <Tree.Twig>
                <Tree.Stem>
                  <Box zIndex={1} height={365} width={350}>
                    <Class
                      Enum={true}
                      Title='Skill'
                      PrivateProperties='Algorithm|Data Structure knowledge|Object oriented programming|Basic knowledge of Database|Front-end development|Backend-end development|Git|Agile Methodologies (Scrum specifically)|Graphic Design (professional)'
                      PublicProperties=''
                    />
                  </Box>
                </Tree.Stem>
              </Tree.Twig>
            </Tree.Branches>
          </Tree.Twig>
          <Tree.Twig>
            <Tree.Stem>
              <Box zIndex={1} height={290} width={350}>
                <Class
                  Title='Experience'
                  PrivateProperties={`- string currentJob = "Graphic designer"|- string company = "Sabanet"|- string startDate = 1400/1/1|- int codingExperienceYear = 5|- int designExperienceYear = 3`}
                  PublicProperties='+ void printMyWorks()'
                />
              </Box>
            </Tree.Stem>
          </Tree.Twig>
        </Tree.Branches>
      </Tree.Trunk>
    </Tree>
  )
}

export default ClassTree
