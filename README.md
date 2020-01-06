# VanillaJS-Redux

## Change Element BackgroundColor

## Feature
- VanillaJS ✅
- Redux ✅
- Parcel ✅

### Redux three Rules
1. 단일 스토어
2. 읽기 전용 상태
   - 상태를 업데이트할 때 기존의 객체는 건드리지 않고 새로운 객체를 생성해준다.
   - 내부적으로 데이터가 변경되는 것을 감지하기위해 얕은 비교를 하기 때문(성능 유지를 위해서)
3. 리듀서는 순수함수