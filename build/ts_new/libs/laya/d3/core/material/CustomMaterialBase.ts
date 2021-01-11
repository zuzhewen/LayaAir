import { ClassUtils } from "../../../utils/ClassUtils";
import { Shader3D } from "../../shader/Shader3D";
import { Material } from "./Material";

export default class CustomMaterialBase extends Material{

    static CULL: number  = Shader3D.propertyNameToID("s_Cull");
	static BLEND: number = Shader3D.propertyNameToID("s_Blend");
	static BLEND_SRC: number = Shader3D.propertyNameToID("s_BlendSrc");
	static BLEND_DST: number = Shader3D.propertyNameToID("s_BlendDst");
	static DEPTH_TEST: number  = Shader3D.propertyNameToID("s_DepthTest");
    static DEPTH_WRITE: number = Shader3D.propertyNameToID("s_DepthWrite");
      

    //#region  static public

    public static AddCustomMaterialClass(str:string,classDef:any){
        ClassUtils.regClass(str, classDef);
    }


    //#endregion


	/**
	 * 是否写入深度。
	 */
	get depthWrite(): boolean {
		return this._shaderValues.getBool(CustomMaterialBase.DEPTH_WRITE);
	}

	set depthWrite(value: boolean) {
		this._shaderValues.setBool(CustomMaterialBase.DEPTH_WRITE, value);
	}

	/**
	 * 剔除方式。
	 */
	get cull(): number {
		return this._shaderValues.getInt(CustomMaterialBase.CULL);
	}

	set cull(value: number) {
		this._shaderValues.setInt(CustomMaterialBase.CULL, value);
	}

	/**
	 * 混合方式。
	 */
	get blend(): number {
		return this._shaderValues.getInt(CustomMaterialBase.BLEND);
	}

	set blend(value: number) {
		this._shaderValues.setInt(CustomMaterialBase.BLEND, value);
	}

	/**
	 * 混合源。
	 */
	get blendSrc(): number {
		return this._shaderValues.getInt(CustomMaterialBase.BLEND_SRC);
	}


	set blendSrc(value: number) {
		this._shaderValues.setInt(CustomMaterialBase.BLEND_SRC, value);
	}

	/**
	 * 混合目标。
	 */
	get blendDst(): number {
		return this._shaderValues.getInt(CustomMaterialBase.BLEND_DST);
	}

	set blendDst(value: number) {
		this._shaderValues.setInt(CustomMaterialBase.BLEND_DST, value);
	}

	/**
	 * 深度测试方式。
	 */
	get depthTest(): number {
		return this._shaderValues.getInt(CustomMaterialBase.DEPTH_TEST);
	}

	set depthTest(value: number) {
		this._shaderValues.setInt(CustomMaterialBase.DEPTH_TEST, value);
	}
}