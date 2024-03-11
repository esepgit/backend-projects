
export const getCountries = async (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send("err");

    conn.query("SELECT * FROM countries", (err, rows) => {
      if (err) return res.send("err");
      res.json(rows);
    });
  });
};

export const getCountry = async (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send("err");

    conn.query("SELECT * FROM countries WHERE id = ?", [req.params.id], (err, rows) => {
      if (err) return res.send("err");
      res.json(rows);
    });
  });
};

export const createCountry = async (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send("err");

    conn.query("INSERT INTO countries SET ?", [req.body], (err, rows) => {
      if (err) return res.send("err");
      res.send('country added');
    });
  });
};

export const updateCountry = async (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send("err");

    conn.query("UPDATE countries SET ? WHERE id = ?", [req.body, req.params.id], (err, rows) => {
      if (err) return res.send("err");
      res.send('country updated');
    });
  });
};

export const deleteCountry = async (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send("err");

    conn.query("DELETE FROM countries WHERE id = ?", [req.params.id], (err, rows) => {
      if (err) return res.send("err");
      res.send('country deleted');
    });
  });
};

