import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  getContent,
  addBullet,
  removeBullet,
  updateHeadline,
  updateBullet
} from "../redux/ContentSlice";
import Bullet from "../typings/Bullet";
import { useAppDispatch } from "../app/hooks";

const Container = styled("div")`
  width: 60%;
`;

const Header = styled("div")`
  background-color: #263d5f;
  color: #fff;
  padding: 12px;
  border-radius: 12px 12px 0 0;
`;

const Form = styled("div")`
  padding: 12px;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
`;

const BulletPoint = function ({ id, title, value, onDelete }: any) {
  const dispatch = useAppDispatch();

  const onRemoveBullet = (id: string) => {
    dispatch(removeBullet(id));
  };

  const onInputChange = (id: any, text: string) => {
    dispatch(updateBullet({ id, text }));
  };

  return (
    <div className="form-group">
      <label>{title}</label>
      <div className="bullet-input">
        <input
          value={value}
          onChange={(e) => {
            onInputChange(id, e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            onRemoveBullet(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const EditorContainer: React.FC<any> = function () {
  const dispatch = useAppDispatch();
  const contentState = useSelector(getContent);
  const { content } = contentState;
  const { headline, bullets } = content;

  const onAddBullet = () => {
    dispatch(addBullet());
  };

  const onHeadlineChanged = (evt: React.FormEvent<HTMLInputElement>) => {
    dispatch(updateHeadline(evt.currentTarget.value));
  };

  return (
    <Container>
      <Header>Edit Component</Header>
      <Form>
        <div className="form-group">
          <label>Headline</label>
          <input value={headline} onChange={onHeadlineChanged} />
        </div>
        {bullets?.map((bullet: Bullet, index: number) => {
          return (
            <BulletPoint
              key={bullet.id}
              id={bullet.id}
              title={`Bullet #${index + 1}`}
              value={bullet.text}
            />
          );
        })}
        <div style={{ marginTop: "6px" }}>
          <button type="button" onClick={onAddBullet}>
            + Add Bullet
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default EditorContainer;