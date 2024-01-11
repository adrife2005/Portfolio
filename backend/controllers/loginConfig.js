const moongose = require("mongoose");
const asyncHandler = require("express-async-handler");
const uuid = require("uuid");

// @desc Get data
// @rute GET /login
// @status private
const getData = asyncHandler(async (req, res) => {
  await res.status(200).json(members);
});

// @desc Set data
// @rute POST /login
// @status private
const setData = asyncHandler(async (req, res) => {
  const createUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    proyect: req.body.proyect,
    status: "active",
  };

  if (!createUser.name || !createUser.email || !createUser.proyect) {
    res.status(400);
    throw new Error("Pleas fill out al the fields");
  }

  members.push(createUser);
  res.redirect("/#form");
});

// @desc Update data
// @rute PUT /login:id
// @status private
const updateData = asyncHandler(async (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updateMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;
        member.proyect = updateMember.proyect
          ? updateMember.proyect
          : member.proyect;
      }

      res.json({ msg: "Updated sucessfully" });
    });
  } else {
    res.json({ msg: "No member of the ID of" + req.params.id });
  }
});

// @desc Delete data
// @rute DELETE /login/:id
// @status private
const deleteData = asyncHandler(async (req, res) => {
  res.send({ msg: `deleteData of the ID ${req.params.id}` });
});

module.exports = {
  getData,
  setData,
  updateData,
  deleteData,
};
