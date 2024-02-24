import Link from "next/link";
import { AlertCircle } from "lucide-react";

import {
  NOT_FOUND_BTN_TEXT,
  NOT_FOUND_TEXT,
  NOT_FOUND_TITLE,
} from "@/constants";

const NotFound = () => (
  <div className="not-found-container">
    <AlertCircle size={48} />
    <h1 className="not-found-title">{NOT_FOUND_TITLE}</h1>
    <p className="text-lg">{NOT_FOUND_TEXT}</p>
    <Link href="/">
      <button className="btn btn-error">{NOT_FOUND_BTN_TEXT}</button>
    </Link>
  </div>
);

export default NotFound;
