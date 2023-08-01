import {
    ComponentFactoryResolver,
    Directive,
    Input,
    OnInit,
    ViewContainerRef
  } from "@angular/core";
  import { FormGroup } from "@angular/forms";
  import { InputComponent } from "../input/input.component";
  import { ButtonComponent } from "../button/button.component";
  import { SelectComponent } from "../select/select.component";
  import { DateComponent } from "../date/date.component";
  import { CheckboxComponent } from "../checkbox/checkbox.component";
import { RadioComponent } from "../radio/radio.component";
import { FieldConfig } from "src/app/dynamic-form-and -controls/models/fields.interface";
  
  const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent,
    radiobutton: RadioComponent,
    checkbox: CheckboxComponent
  };
  @Directive({
    selector: "[dynamicField]"
  })
  export class DynamicFieldDirective implements OnInit {
    @Input() field: FieldConfig;
    @Input() group: FormGroup;
    componentRef: any;
    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
    ) {}
    ngOnInit() {
      const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.type]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }
  