import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-secondary font-bold mb-12 hover:text-white active:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> 메인으로 돌아가기
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass p-8 md:p-16 rounded-[3rem] border border-white/10"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">이용약관 (Terms of Service)</h1>
          
          <div className="space-y-12 text-gray-400 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl font-bold text-white mb-6">제1조 (목적)</h2>
              <p>본 약관은 가이든(이하 “회사”라 합니다)이 제공하는 영상 제작, 편집 및 관련 서비스(이하 “서비스”라 합니다)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제2조 (용어의 정의)</h2>
              <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ul className="list-decimal pl-6 space-y-2 mt-4">
                <li>“서비스”라 함은 회사가 제공하는 영상 제작, 편집, 숏폼 콘텐츠 제작, 릴스 제작, 유튜브 쇼츠 제작, 광고 영상 제작 등 모든 영상 관련 서비스를 의미합니다.</li>
                <li>“이용자”라 함은 본 약관에 따라 회사가 제공하는 서비스를 이용하는 개인 또는 법인을 의미합니다.</li>
                <li>“회원”이라 함은 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 의미합니다.</li>
                <li>“비회원”이라 함은 회원가입 없이 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
                <li>“프로젝트”라 함은 이용자가 의뢰한 특정 제작 및 대행 작업의 단위를 의미합니다.</li>
                <li>“결과물”이라 함은 프로젝트를 통해 제작된 최종 파일 및 관련 자료를 의미합니다.</li>
                <li>“원본 소스”라 함은 이용자가 제공한 촬영 영상, 이미지, 음원, 텍스트 등 제작에 필요한 모든 원본 자료를 의미합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제3조 (약관의 효력 및 변경)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>본 약관은 회사의 웹사이트(이하 “사이트”라 합니다)에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
                <li>회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 약관을 변경하고자 하는 경우에는 적용일자 및 변경사유를 명시하여 현행약관과 함께 사이트의 초기화면 또는 공지사항에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리한 약관의 변경인 경우에는 30일 이전부터 공지하며, 이메일, SMS 등의 전자적 수단을 통해 개별 통지합니다.</li>
                <li>회사가 전항에 따라 변경약관을 공지 또는 통지하면서 이용자에게 약관 변경 적용일까지 거부의사를 표시하지 아니할 경우 약관의 변경에 동의한 것으로 간주한다는 내용을 명확하게 공지 또는 통지하였음에도 이용자가 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면 이용자가 변경약관에 동의한 것으로 간주합니다.</li>
                <li>이용자가 변경된 약관에 동의하지 않는 경우 회사는 해당 이용자에 대하여 변경된 약관의 적용을 할 수 없으며, 이 경우 이용자는 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사는 이용계약을 해지할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제4조 (약관 외 준칙)</h2>
              <p>본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 저작권법 등 관련 법령 또는 상관례에 따릅니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제5조 (서비스의 제공)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>
                  회사는 다음과 같은 서비스를 제공합니다.<br />
                  가. 영상 편집 서비스 (릴스, 숏폼, 유튜브 쇼츠 등)<br />
                  나. 영상 촬영 및 제작 서비스<br />
                  다. 광고 영상 제작 서비스<br />
                  라. 기업 홍보 영상 제작 서비스<br />
                  마. 개인 소장용 영상 제작 서비스<br />
                  바. 블로그 관리 및 제작 서비스<br />
                  사. 기타 제작 관련 부가 서비스
                </li>
                <li>회사는 서비스의 종류에 따라 이용시간, 이용횟수, 제공방식 등을 구체적으로 정할 수 있으며, 이를 사이트를 통해 공지합니다.</li>
                <li>회사는 서비스를 일정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다. 다만, 이러한 경우에는 그 내용을 사전에 공지합니다.</li>
                <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 회사는 서비스의 종류나 성질에 따라 제공하는 서비스 중 일부에 대해서는 별도로 이용시간을 정할 수 있으며, 이 경우 사전에 그 이용시간을 명시하고 공지합니다.</li>
                <li>회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 회사는 사전에 그 사실을 이용자에게 통지하며, 사전 통지가 불가능한 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제6조 (서비스 이용계약의 성립)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>서비스 이용계약은 이용자가 회사가 제공하는 문의 폼, 이메일, 전화 등의 방법으로 서비스 이용을 신청하고, 회사가 이를 승낙함으로써 성립합니다.</li>
                <li>
                  이용자는 서비스 이용 신청 시 다음 사항을 정확히 기재하여야 합니다.<br />
                  가. 성명 또는 상호<br />
                  나. 이메일 주소<br />
                  다. 제작 목적 및 영상 주제<br />
                  라. 예상 편수 및 예산<br />
                  마. 기타 회사가 필요하다고 인정하는 사항
                </li>
                <li>회사는 다음 각 호에 해당하는 경우 이용 신청을 승낙하지 않거나 사후에 이용계약을 해지할 수 있습니다. (실명이 아니거나 타인의 명의를 이용한 경우, 허위 정보 기재, 귀책사유, 배포 부적절 등)</li>
                <li>회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제7조 (개인정보의 보호)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사의 개인정보처리방침이 적용됩니다.</li>
                <li>회사는 이용자의 개인정보를 본인의 승낙 없이 타인에게 누설, 배포하지 않습니다. 다만, 관계법령에 의한 수사상의 목적으로 적법한 절차에 의한 경우에는 그러하지 않습니다.</li>
                <li>서비스 이용과정에서 이용자로부터 수집하는 개인정보의 관련 사항은 회사의 개인정보처리방침에서 규정합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제8조 (이용자의 의무)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>이용자는 타인의 정보 도용, 회사가 게시한 정보의 무단 변경, 회사 및 제3자의 지적재산권 침해, 명예 손상 등의 행위를 하여서는 안 됩니다.</li>
                <li>이용자는 관계법령, 본 약관 등을 준수하여야 하며 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.</li>
                <li>이용자는 서비스 이용을 위해 제공한 원본 소스에 대한 적법한 권리를 보유하고 있어야 하며, 제3자의 권리를 침해하지 않음을 보증합니다.</li>
                <li>이용자는 프로젝트 진행 중 회사의 요청사항에 성실히 협조하여야 합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제9조 (회사의 의무)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>회사는 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.</li>
                <li>회사는 개인정보보호를 위해 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.</li>
                <li>회사는 서비스 이용과 관련하여 이용자로부터 제기된 정당한 의견이나 불만을 처리하여야 합니다.</li>
                <li>회사는 이용자와 합의한 제작 일정을 준수하기 위해 노력하며, 지연될 경우 사전에 통지합니다.</li>
                <li>전문적인 기술과 경험을 바탕으로 최상의 품질의 결과물을 제공하기 위해 노력합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제10조 (서비스 이용요금 및 결제)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>서비스는 유료를 원칙으로 하며, 종류와 내용에 따라 요금이 차등 적용될 수 있습니다.</li>
                <li>서비스 이용요금은 회사와 이용자 간의 협의를 통해 견적서 또는 계약서에 명시됩니다.</li>
                <li>결제 방법은 계좌이체, 신용카드 결제 및 기타 회사가 정하는 수단으로 가능합니다.</li>
                <li>결제 방식 및 시기는 협의하여 결정합니다. (예: 계약금 50% 선불, 잔액 50% 완료 시)</li>
                <li>이용요금을 미납한 경우 서비스 제공을 중단하거나 제한할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제11조 (프로젝트 진행 및 수정)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>프로젝트 단계: 문의 접수 및 상담 &gt; 견적 및 계약 &gt; 원본 접수 &gt; 시안 제작 &gt; 수정 &gt; 최종 납품</li>
                <li>기본 수정은 2회이며, 추가 수정 시 별도 협의 및 추가 비용이 발생할 수 있습니다.</li>
                <li>원본 소스 변경, 콘셉트 완전 변경 등은 수정 범위를 초과하는 것으로 간주하여 추가 비용이 발생할 수 있습니다.</li>
                <li>이용자 요청에 의해 프로젝트가 중단될 경우 이미 진행된 작업에 대해 비용이 청구될 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제12조 (결과물의 납품 및 검수)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>정한 기한 내에 결과물을 납품하며 이메일, 클라우드 등의 방법으로 납품합니다.</li>
                <li>이용자는 결과물 수령 후 7일 이내에 검수를 완료하여야 하며, 이의가 없을 시 승인된 것으로 간주합니다.</li>
                <li>명백한 하자가 발견된 경우 무상으로 수정합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제13조 (저작권 및 지적재산권)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>이용자가 이용요금을 완납한 경우 결과물의 저작권은 이용자에게 양도됩니다. (단, 회사는 포트폴리오 등으로 사용할 수 있음)</li>
                <li>이용자가 제공한 원본 소스에 대한 책임은 이용자에게 있습니다.</li>
                <li>결과물 제작 과정에서 사용된 제3자의 저작물 라이선스는 별도 명시되며 해당 조건을 준수하여야 합니다.</li>
                <li>결과물 재판매나 2차 소스 활용은 회사의 사전 동의가 필요합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제14조 (환불 및 취소)</h2>
              <ul className="list-decimal pl-6 space-y-3">
                <li>환불: 작업 전(100%), 진행률 30% 미만(70%), 50% 미만(50%), 50% 이상(환불 불가)</li>
                <li>회사의 귀책사유로 불가능한 경우 전액 환불합니다.</li>
                <li>천재지변 등 불가항력 시 상호 협의하여 환불 또는 일정 조정을 결정합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제15조 (손해배상)</h2>
              <p>회사는 고의/중과실로 손해를 입힌 경우 이용요금을 초과하지 않는 범위 내에서 배상하며, 이용자가 약관 위반 시 이용자가 배상 책임을 집니다. 원본 소스 저작권 침해 시 이용자가 배상해야 합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제16조 (면책사항)</h2>
              <p>회사와 이용자는 천재지변, 서비스 이용 장애, 자료 활용으로 인한 손해, 원본 소스 저작권 침해, 이용자 간 분쟁 등에 대해 책임이 면제되는 면책 사유를 규정합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제17조 (재판권 및 준거법)</h2>
              <p>본 약관은 대한민국 법률에 따라 해석되며 분쟁 시 성실히 협의하되 해결되지 않을 경우 대한민국 관할법원에 소를 제기할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제18조 (통지)</h2>
              <p>이용자 제공 이메일, 전화 등으로 통지하며 불특정 다수는 사이트 게시로 갈음할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제19조 (비밀유지)</h2>
              <p>상대방으로부터 알게 된 영업비밀을 누설하여서는 안 되며 이 의무는 계약 종료 후 3년간 유효합니다.</p>
            </section>

            <p className="pt-12 text-xs opacity-50 border-t border-white/10">이 약관은 2026년 4월 21일부터 적용됩니다.</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
