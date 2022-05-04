import { Component, OnInit } from "@angular/core"
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms"

@Component({
  selector: "app-learn-form",
  templateUrl: "./learn-form.component.html",
  styleUrls: ["./learn-form.component.scss"],
})
export class LearnFormComponent implements OnInit {
  // để có thể dùng được reactive form, cần import ReactiveFormModule trong app.module.ts
  // có 3 cách khởi tạo form: khởi tạo lúc khai bao property, trong contructor và ngOnInit
  // trong trường hợp có nhiều formGroup lồng nhau, chúng ta sử dụng thuộc tính formGroupName

  // mỗi một form sẽ là một FormGroup, mỗi input trong form sẽ là một FormControl
  // các trạng thái của đối tượng input
  // lắng nghe bằng cách: sử dụng đối tượng và gọi tới className
  // các className: touched, dirty, pristine, valid, invalid

  // validator và asyncValidator: asyncValidator sẽ sử dụng trong trường hợp các bạn muốn
  // tạo request lên server để kiểm tra thông tin người dùng đã nhập

  // tạo một form độc lập và ko muốn bao ngoài bằng một formGroup ==> sử dụng new FormControl

  // cập nhật giá trị cho formValue: có 2 mothod là pathValue và setValue.
  // pathValue sẽ cho phép cập nhật 1 phần của form
  // setValue yêu cầu phải cập nhật đầy đủ, sẽ báo lỗi nếu có 1 trường nào đấy thiếu
  // angular cũng sẽ cho 1 phương thức để resetValue

  rfContact!: FormGroup
  searchForm = new FormControl()
  constructor(private formBuilder: FormBuilder) {
    this.rfContact = this.formBuilder.group({
      contactName: ["", Validators.required],
      username: ["", Validators.required],
      useremail: ["", Validators.required],
      social: this.formBuilder.group({
        facebook: ["", Validators.required],
        twitter: ["", Validators.required],
        website: ["", Validators.required],
      }),
      tels: this.formBuilder.array([this.formBuilder.control("")]),
    })
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe(console.log)
    setTimeout(() => {
      this.rfContact.patchValue({
        contactName: "Nguyen Thac Hung",
        social: {
          facebook: "facebook.com",
        },
      })
    }, 500)
  }

  get tels(): FormArray {
    return this.rfContact.get("tels") as FormArray
  }

  addTel() {
    this.tels.push(this.formBuilder.control(""))
  }
  removeTel(index: number) {
    this.tels.removeAt(index)
  }
  onSubmit(event: any) {
    event.preventDefault()
    console.log(this.rfContact)
    console.log(this.rfContact.value)
    this.rfContact.reset({
      contactName: { value: "name", disable: true },
    })
  }
}
