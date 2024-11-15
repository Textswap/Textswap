import { getServerSession } from "next-auth";
import { Col, Container, Row, Table } from "react-bootstrap";
import StuffItemAdmin from "@/components/StuffItemAdmin";
import { prisma } from "@/lib/prisma";
import { adminProtectedPage } from "@/lib/page-protection";
import authOptions from "@/lib/authOptions";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const stuff = await prisma.stuff.findMany({});
  const users = await prisma.user.findMany({});

  return (
    <main>
      <Container id="list" fluid className="py-3">
        This is the admin page
      </Container>
    </main>
  );
};

export default AdminPage;
