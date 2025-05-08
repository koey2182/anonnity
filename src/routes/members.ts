import express from "express";
import { getAllMembers, createMember } from "../controller/member_controller";
const router = express.Router();

router.get('/', getAllMembers);
router.post('/', createMember);

export default router;