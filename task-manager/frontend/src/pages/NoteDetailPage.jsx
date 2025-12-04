import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import toast, { LoaderIcon } from "react-hot-toast";
import api from "../lib/axios";
import { ArrowLeft, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);
  console.log(note);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  function handleDelete() {}
  function handleSave() {}

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link to={"/"} className="btn btn-ghost">
              <ArrowLeft className="h-5 w-5" /> back to notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-outline btn-error"
            >
              <Trash2Icon className="h-5 w-5 " />
              Delete Note
            </button>
          </div>
          <div className=" card body bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  className="input input-bordered"
                  placeholder="Note Title"
                  type="text"
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="write your notes here"
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="btn btn-primary"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
