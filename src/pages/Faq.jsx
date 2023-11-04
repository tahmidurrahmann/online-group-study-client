const Faq = () => {
    return (
        <div className="container mx-auto p-10">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What is online group study?
                        </div>
                        <div className="collapse-content">
                            <p>Online group study is a collaborative learning approach where individuals come together virtually to study and learn as a group. It allows participants to share knowledge, resources, and support one another in their educational pursuits.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What are the benefits of online group study?
                        </div>
                        <div className="collapse-content">
                            <p>Collaboration: You can share notes, discuss difficult concepts, and solve problems together.
                                Accountability: Group members can help keep each other motivated and on track with their studies.
                                Diverse perspectives: Different group members may have unique insights and knowledge.
                                Social interaction: It provides a sense of community and reduces feelings of isolation.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I make the most of an online study group?
                        </div>
                        <div className="collapse-content">
                            <p>Set clear goals and objectives for each session.
                                Establish a regular schedule for study sessions.
                                Stay organized with shared documents, notes, and study materials.
                                Actively participate and engage with group members.
                                Respect the time and contributions of other group members.</p>
                        </div>
                    </div>
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What are some effective online study group activities?
                        </div>
                        <div className="collapse-content">
                            <p>Reviewing and discussing class materials or textbooks.
                                Working on assignments or projects together.
                                Creating and sharing study guides or flashcards.
                                Conducting practice quizzes and tests.
                                Peer teaching and explaining difficult concepts to each other.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What online tools can help with group study?
                        </div>
                        <div className="collapse-content">
                            <p>Video conferencing platforms (e.g., Zoom, Microsoft Teams).
                                Shared document and note-taking tools (e.g., Google Docs, Evernote).
                                Messaging and communication apps (e.g., WhatsApp, Slack).
                                Study group management apps (e.g., Study With Me, Discord).</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How can I find or create an online study group?
                        </div>
                        <div className="collapse-content">
                            <p>You can find or create online study groups through various platforms and methods, including social media, academic forums, study group apps, or by reaching out to classmates and peers. You can also use video conferencing tools like Zoom or Microsoft Teams for group study sessions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;