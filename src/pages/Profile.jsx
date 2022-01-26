import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux';
import {
  Header,
  Wrapper,
  Card,
  CardHeader,
  Avatar,
  Title,
  Name,
  StyledParagraph,
  Stats,
  EditStyledIcon,
  SaveStyledSave,
  NameParagraph,
  StButton
} from '../components';
import { StyledDivDashboard } from '../pages';

const Profile = () => {
  const userData = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState(userData.user.user.firstName);
  const [lastName, setLastName] = useState(userData.user.user.lastName);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const handleUpdateUser = (values) => dispatch(updateUser(values));

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const lastFirstName = (e) => {
    setLastName(e.target.value);
  };

  const handleUpdate = () => {
    handleUpdateUser({
      id: userData.user.user.id,
      firstName: firstName,
      lastName: lastName
    });
    setEdit(false);
  };

  return (
    <StyledDivDashboard>
      <Header />

      <Wrapper>
        <Card>
          <CardHeader>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZufYn_dxi91143X8E3p0QLJQRJ2XxvJzjbpJm1eNnPkrBzInQ5jKWNXyIchAnIv4kao&usqp=CAU" />

            {edit ? (
              <Title>
                <Name
                  type="text"
                  value={firstName}
                  onChange={changeFirstName}
                  data-testid="first-name-element"
                />
                <Name
                  value={lastName}
                  onChange={lastFirstName}
                  data-testid="last-name-element"
                />{' '}
              </Title>
            ) : (
              <Title>
                <NameParagraph    data-testid="name-element">{firstName}</NameParagraph>
                <NameParagraph    >{lastName}</NameParagraph>
              </Title>
            )}

            <StyledParagraph>{userData.user.user.email}</StyledParagraph>
          </CardHeader>
          <Stats>
            {!edit ? (
              <StButton onClick={() => setEdit(true)} data-testid="edit-element">
                <EditStyledIcon />
              </StButton>
            ) : (
              <StButton onClick={handleUpdate} data-testid="save-element">
                <SaveStyledSave />
              </StButton>
            )}
          </Stats>
        </Card>
      </Wrapper>
    </StyledDivDashboard>
  );
};

export default Profile;
