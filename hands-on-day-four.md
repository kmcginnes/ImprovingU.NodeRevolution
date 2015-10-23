# Day Four - Hands On

Let's build a functional app using some of the techniques that we've learned in this class.

## Idea

The ImprovingU classes are currently listed in the Improving Sharepoint. this has been a bit painful to browse and keep up to date.

What we want to do is provide an extremely simple front end for Improvers to browse classes. We'll also need a way for teachers to submit class descriptions.

There's a lot of potential for extension of this idea, but let's focus on the [MLP](https://medium.com/the-happy-startup-school/beyond-mvp-10-steps-to-make-your-product-minimum-loveable-51800164ae0c#.5chi2svwh).

<a href="https://medium.com/the-happy-startup-school/beyond-mvp-10-steps-to-make-your-product-minimum-loveable-51800164ae0c#.5chi2svwh"><img src="mlp.jpg" height="80px" /></a>

## Implementation

I don't want to make too many assumptions here, but we won't have too much time to go hog wild on this thing, so we need to minimize the work.

I'm thinking we will skip authentication entirely for now. It is always a bag of hurt, and I just don't think 2 hours would be enough.

Also, I'm thinking we skip having a database. It would be cool to learn how to setup MongoDB, but that's an entire course on its own. We can get away with just using flat files for persistence.

So the parts I want to focus on would be the Node backend, the ReactJS front end, and the Gulp build system. Once those are setup it should be rather simple to start iterating on a few simple features.

We'll use an Improving GitHub repo to house our code. I'd like to break us off into pairs and work on different pieces of the system simultaneously.

## Actors in the system

* __Window shopper__ is someone who is just perusing the list of classes or looking at the details. This is the most basic user, and if we have any authentication, this user would not need to login.
* __Student__ would be a logged in Improver. This is someone who would be signing up for classes.
* __Teacher__ would be a logged in Improver. This is someone who would be submitting classes.
* __Board member__ would be a logged in Improver. This is someone who can approve of class submissions.
* __Admin__ would be a logged in Improver. This user would have full system access, including user management.

## Backlog

__Class list__
As a window shopper
I want to see a list of classes
So I can browse to find a class that interests me

__Schedule__
As a window shopper
I want to see the schedule of classes
So I can figure out which classes fit in my schedule

__Signup__
As a student
I want to sign up for a class
So I can reserve a seat

__Class submission__
As a teacher
I want to submit a class
So that students can signup
