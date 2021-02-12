import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function EpisodeFilters({ inputs, onChange, onSubmit, readOnly = false }) {
  return (
    <Form inline className="justify-content-center" onSubmit={onSubmit}>
      <FormControl
        readOnly={readOnly}
        className="mb-1 mr-sm-2"
        name="name"
        placeholder="name"
        value={inputs.name}
        onChange={onChange}
      />

      <FormControl
        readOnly={readOnly}
        className="mb-1 mr-sm-2"
        name="episode"
        placeholder="episode"
        value={inputs.episode}
        onChange={onChange}
      />

      <Button type="submit" variant="secondary">
        Search
      </Button>
    </Form>
  );
}

export default EpisodeFilters;
