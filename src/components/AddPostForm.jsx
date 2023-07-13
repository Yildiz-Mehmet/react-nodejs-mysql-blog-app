import React from "react";
import {
  Buttom,
  TextField,
  Select,
  Input,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const tags = ["fun", "programming", "health", "science"];

const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
});

const AddPostForm = ({ open, setClose }) => {
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Yeni bir yazı eklemek için aşağıdaki formu doldurun.
          </DialogContentText>
          <div>
            <form noValidate autoComplete="off" onSubmit={() => {}}>
              <TextField
                id="title"
                label="Başlık"
                name="title"
                variant="outlined"
                size="small"
                inputRef={register}
                error={errors?.title ? true : false}
                fullWidth
              />
              <TextField
                id="subtitle"
                label="Alt Başlık"
                name="subtitle"
                variant="outlined"
                size="small"
                inputRef={register}
                error={errors?.subtitle ? true : false}
                fullWidth
              />
              <Controller
                as={
                  <Select input={<Input />} fullWidth>
                    {tags?.map((tag, index) => {
                      <MenuItem key={index} value={tag}>
                        {tag}
                      </MenuItem>;
                    })}
                  </Select>
                }
                name="tag"
                control={control}
                error={errors?.tag ? true : false}
                defaultValue={tags[0]}
              />
              <TextField
                id="content"
                label="İçerik"
                name="content"
                multiline
                rows={4}
                variant="outlined"
                size="small"
                inputRef={register}
                error={errors?.content ? true : false}
                fullWidth
              />
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPostForm;
