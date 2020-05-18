import FeedBack from '../../page-objects/pages/FeedBack'
describe('Feedback Test Using Feature', () => {
    before(function(){
        FeedBack.LoadFeedbackPage() 
    })
    it('Should Submit Feedback form', () => {
        FeedBack.submitFeedback()
    })
    it('Should Print Feedback submitted Successfully', () => {
        FeedBack.verifyingFeedBackSublittedSuccessfully()
    })
   
})