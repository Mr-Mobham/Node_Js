const express       = require('express');
const bodyParser    = require('body-parser');
const path          = require('path');
const cookieSession = require('cookie-session');
const cors          = require('cors')




const app = express();
app.use(cors(),express.static(path.join(__dirname, 'styles')));


// notifications //
const notifications          = require("./routers/shopping-card/pages/get/index/notification/notification");
const delete_notifications   = require("./routers/shopping-card/pages/delets/index/notification/notification");



// subjects //
const subjects         = require("./routers/shopping-card/pages/get/index/subjects/subjects");
const sub_categories   = require("./routers/shopping-card/pages/get/index/subjects/sub_subject");
const title_subjects   = require("./routers/shopping-card/pages/get/index/subjects/title_subjects");
const last_subjects    = require("./routers/shopping-card/pages/get/index/last_subject/comment");
const last_advice      = require("./routers/shopping-card/pages/get/index/advices/advice");


// comments //
const answer_comments       = require("./routers/shopping-card/pages/get/comments/answer_comments");
const count_comments        = require("./routers/shopping-card/pages/get/comments/count_comments");
const like_comments         = require("./routers/shopping-card/pages/puts/comments/like");
const editor_data           = require("./routers/shopping-card/pages/puts/comments/editor_data");
const update_count_answer   = require("./routers/shopping-card/pages/puts/comments/count_answer");
const paganation            = require("./routers/shopping-card/pages/get/comments/paganation");
const answer_like           = require("./routers/shopping-card/pages/puts/comments/answer_like");




app.use(bodyParser.json());
app.use(
  notifications,
  delete_notifications,
  subjects,
  sub_categories,
  title_subjects,
  last_subjects,
  last_advice,
  answer_comments,
  count_comments,
  like_comments,
  editor_data,
  update_count_answer,
  paganation,
  answer_like
);


app.listen(process.env.port || 4000,()=>{
});
