import React from 'react';
import '../App.css';

function Profile() {
    return (
        <div class="profile">
            <div class="row">
                <div class="col-12">
                    <div class="my-5">
                        <h3>My Profile</h3>
                        <hr />
                    </div>
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Contact detail</h4>

                                        <div class="col-md-6">
                                            <label class="form-label"></label>
                                            <input type="text" class="form-control" placeholder="First Name *" aria-label="First name" value=""/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"></label>
                                            <input type="text" class="form-control" placeholder="Last Name *" aria-label="Last name" value=""/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"></label>
                                            <input type="text" class="form-control" placeholder="User Name *" aria-label="User Name" value=""/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"></label>
                                            <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone number" value=""/>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="inputEmail4" class="form-label"></label>
                                            <input type="email" placeholder= "Email *" class="form-control" id="inputEmail4" value=""/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"></label>
                                            <input type="text" class="form-control" placeholder="Skype User" aria-label="Phone number" value=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xxl-4">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Upload your profile photo</h4>
                                        <div class="text-center">

                                            <div class="square position-relative display-2 mb-3">
                                                <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>

                                            <input type="file" id="customFile" name="file" hidden=""/>
                                                <button type="button" class="link-btn" for="customFile">Upload</button>
                                                <button type="button" class="link-btn">Remove</button>

                                                <p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-6 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Social media detail</h4>

                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Facebook" value="http://www.facebook.com"/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Twitter" value="http://www.twitter.com"/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Linkedin" value="http://www.linkedin.com"/>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Instragram" value="http://www.instragram.com"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-xxl-6">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="my-4">Change Password</h4>

                                        <div class="col-md-6">
                                            <label for="exampleInputPassword1" class="form-label">Old password *</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="exampleInputPassword2" class="form-label">New password *</label>
                                            <input type="password" class="form-control" id="exampleInputPassword2"/>
                                        </div>

                                        <div class="col-md-12">
                                            <label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
                                            <input type="password" class="form-control" id="exampleInputPassword3"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="gap-3 d-md-flex justify-content-md-end text-center">
                            <button type="button" class="btn btn-danger btn-lg">Delete profile</button>
                            <button type="button" class="profilebutton">Update profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;