import React from "react";
import {
  Button,
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
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

import { useForm } from "react-hook-form";
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
  const [tag, setTag] = React.useState("");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

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
                register="true"
                error={errors?.title ? true : false}
                fullWidth
              />
              <TextField
                id="subtitle"
                label="Alt Başlık"
                name="subtitle"
                variant="outlined"
                size="small"
                register="true"
                error={errors?.subtitle ? true : false}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel id="tag" size="small">
                  Tag
                </InputLabel>
                <Select
                  id="tag"
                  value={tag}
                  label="Tag"
                  onChange={handleChange}
                  variant="outlined"
                  style={{ height: 40 }}
                >
                  {tags.map((tag, index) => {
                    return (
                      <MenuItem key={index} value={tag}>
                        {tag}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                id="content"
                label="İçerik"
                name="content"
                multiline
                minRows={4}
                variant="outlined"
                size="small"
                register="true"
                error={errors?.content ? true : false}
                fullWidth
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="inherit">Vazgeç</Button>
          <Button type="submit" variant="outlined" color="primary">
            Yayınla
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPostForm;
